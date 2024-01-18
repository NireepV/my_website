import React, { useState, useEffect } from 'react';
import { getDatabase, ref as dbRef, onValue, push, remove } from "firebase/database";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { app, db } from '../firebase';
import './style/Projects.css'

const Edit = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ title: '', description: '', image: null, detailedDescription: '' });
  const [uploading, setUploading] = useState(false);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const storage = getStorage(app);
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const databaseRef = dbRef(db, 'projects');

    const unsubscribe = onValue(databaseRef, (snapshot) => {
      const data = snapshot.val();
      const projectsArray = Object.entries(data).map(([id, project]) => ({ id, ...project }));
      setProjects(projectsArray);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleInputChange = (event) => {
    if (event.target.name === 'image') {
      setNewProject({
        ...newProject,
        image: event.target.files[0],
      });
    } else {
      setNewProject({
        ...newProject,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setUploading(true);

    if (newProject.image) {
      const storageRef = ref(storage, `images/${newProject.image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, newProject.image);

      uploadTask.on('state_changed',
        (snapshot) => {
          // Handle the upload progress
        },
        (error) => {
          // Handle unsuccessful uploads
          console.log(error);
          setUploading(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const projectsRef = dbRef(db, 'projects');
            push(projectsRef, { ...newProject, image: downloadURL });
            setNewProject({ title: '', description: '', image: null, detailedDescription: '' });
            setUploading(false);
          });
        }
      );
    } else {
      console.log("No image selected");
      setUploading(false);
    }
  };

  const handleDelete = (projectId) => {
    const projectRef = dbRef(db, `projects/${projectId}`);
    remove(projectRef);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  if (!user) {
    return (
      <div>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="title"
          value={newProject.title}
          onChange={handleInputChange}
          placeholder="Title"
          required
        />
        <textarea
          name="description"
          value={newProject.description}
          onChange={handleInputChange}
          placeholder="Description"
          required
        />
        <input
          name="image"
          type="file"
          onChange={handleInputChange}
          required
        />
        <textarea
          name="detailedDescription"
          value={newProject.detailedDescription}
          onChange={handleInputChange}
          placeholder="Detailed Description"
          required
        />
        <button type="submit" disabled={uploading}>Add Project</button>
      </form>

      {/* Display the projects */}
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <img src={project.image} alt={project.title} />
          <p>{project.detailedDescription}</p>
          <button onClick={() => handleDelete(project.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Edit;