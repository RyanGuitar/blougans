import Image from 'next/image'

function Home() {
  return (
    <>
      <h1>My Homepage</h1>
      <Image
        src="/mountains.jpg"
        alt="Picture of the author"
        width={700}
        height={475}
      />
      <p>Welcome to my homepage!</p>
    </>
  )
}

export default Home