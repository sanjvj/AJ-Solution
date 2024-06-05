
export function Topbar(){
  return <div className= "flex justify-around pt-5 mx-44">
    <img src="logo.png" className="w-32 pt-0"></img>
     <div className="hidden md:flex justify-normal mt-10 gap-7 text-sm">
      <h1>Home</h1>
      <h1>About</h1>
      <h1>Service</h1>
      <h1>Portfolio</h1>
      <h1>Jobs</h1>
      <h1>Blog</h1>
      <h1>Contact</h1>
     </div>
     <div className="md:hidden">
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

     </div>
  </div>
}