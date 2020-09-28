import Router from "next/router"
import MainLayout from "../../components/mainLayout";

function About() {
    const linkClickhandler = () => {
        Router.push('/')
    }
  return (
    <MainLayout title={'About page'}>
      <h1>About page</h1>
      <button
      onClick={linkClickhandler}
      >Go back to home</button>
      <button
      onClick={() => Router.push('/posts')}
      >Go back to Posts</button>
    </MainLayout>
  );
}

export default About;
