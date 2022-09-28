import HeroContent from './HeroContent';
// import CardGallery from './CardGallery';

export default function MainPage({
  currentUserStr,
  currentProfileStr,
  projectsStr,
}) {
  const currentProfile = JSON.parse(currentProfileStr);
  const currentUser = JSON.parse(currentUserStr);
  const currentUserProjects = JSON.parse(projectsStr);
  console.log(currentUser, 'currentUser MainPage');

  return (
    <>
      <HeroContent
        currentUser={currentUser}
        currentProfile={currentProfile}
        currentUserProjects={currentUserProjects}
      />
      {/* <CardGallery
        currentUser={currentUser}
        currentProfile={currentProfile}
        currentUserProjects={currentUserProjects}
      /> */}
      {/* <p>Please click view my projects to see your projects</p> */}
    </>
  );
}
