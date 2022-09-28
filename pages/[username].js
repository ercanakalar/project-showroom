import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import SearchResults from '../src/components/Search/SearchResults';

export default function Login() {
  const router = useRouter();
  const { username } = router.query;

  const [searchProfile, setSearchProfile] = useState([]);
  const [searchProjects, setSearchProjects] = useState([]);
  const [searchUser, setSearchUser] = useState([]);

  const getResults = async () => {
    if (!username) return null;
    const findProfile = await fetch(`/api/profiles/${username}`);
    const profile = await findProfile.json();

    const profileData = profile.data;
    console.log(profileData, 'profileData');
    if (!profileData) {
      const findUser = await fetch(`/api/users/${username}`);
      const user = await findUser.json();
      const userData = user.data;
      console.log(userData, 'userData');
      setSearchUser(userData);

      const findProject = await fetch(`/api/projects/${username}`);
      const project = await findProject.json();
      const projectData = project.data;
      setSearchProjects(projectData);

      setSearchProfile(profileData || userData);
    }

    if (profileData) {
      const findProject = await fetch(`/api/projects/${profileData.creatorId}`);
      const project = await findProject.json();
      const projectData = project.data;
      setSearchProjects(projectData);

      const findUser = await fetch(`/api/users/${profileData.creatorEmail}`);
      const user = await findUser.json();
      const userData = user.data;
      setSearchUser(userData);
    }
  };

  useEffect(() => {
    getResults();
  }, [username]);

  return (
    <>
      <SearchResults
        searchProfile={searchProfile}
        searchProjects={searchProjects}
        searchUser={searchUser}
      />
    </>
  );
}
