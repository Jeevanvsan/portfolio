
const Navbar = () => {
  const handleSkillScroll = () => {
      const skillElement = document.querySelector('.skill-main');
      window.scrollTo(
        {
          top: skillElement?.getBoundingClientRect().top,
          left:0,
          behavior: 'smooth'
        }
      )

  } 
  return (
    <header className="w-full py-5 sm:px-10 px-5 bg-transparent">
        <nav className="flex justify-end gap-3">
            <a className="text-white cursor-pointer" id="skill-link" onClick={handleSkillScroll}>Skills</a>
            <a className="text-white cursor-pointer">Projects</a>
            <a className="text-white cursor-pointer">Contact</a>
        </nav>
    </header>
  )
  
}

export default Navbar