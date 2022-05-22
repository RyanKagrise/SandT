import './Footer.css'

const Footer = () => {


  return (
    <>
      <footer className='footer'>
        <div className='technologies'>
          <div className="python"> PYTHON </div>
          <div className="react"> REACT</div>
          <div className="redux"> REDUX </div>
          <div className="flask"> FLASK SQLALCHEMY </div>
          <div className='postgresql'> POSTGRESQL </div>
          <div className='javascript'> JAVASCRIPT </div>
          <div className='css'> CSS </div>
          <div className='html'> HTML5 </div>
        </div>
        <div className='creator-info'>
          <a href='https://github.com/RyanKagrise'>
            <img className='github' src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' alt='' />
          </a>
          <a href='https://ryankagrise.github.io' className='footer-text'>
            Meet The Site's Creator!
          </a>
          <a href='https://www.linkedin.com/in/ryan-kagrise-27893551/'>
            <img className='github' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/640px-Linkedin_icon.svg.png' alt='' />
          </a>
        </div>
      </footer>
    </>
  )
}

export default Footer;
