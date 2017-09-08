import { styles } from '../constants'

const Footer = () => (
  <footer>
    <p>
      Do you want to organize a JSHeroes event? Drop us a line at <a href="mailto://welcome@jsheroes.io">welcome@jsheroes.io</a>
    </p>

    <p>JSHeroes is made with <i className="fa fa-heart" aria-hidden="true"></i> by the community, for the community. Everyone is welcome, please treat each other with respect and empathy.</p>
    <style jsx>{`
      footer {
        padding: 50px 15px 50px;
        background-color: ${styles.mainColor2};
        text-align: center;
      }

      p {
        margin: 0 0 10px;
        color: ${styles.mainColor3};
        font-size: 16px;
        line-height: 32px;
        font-weight: 300;
      }
      
      a {
        color: ${styles.mainColor3};
        font-size: 16px;
        text-decoration: underline;
        text-transform: none;
        transition-duration: .5s;
      }
      
      a:hover {
        color: ${styles.mainColor6};
        text-decoration: none;
      }
      
      .span {
        position: relative;
        top: -1px;
      }
      
      .text-blue {
        font-size: 16px;
        color: ${styles.mainColor6};
        text-decoration: none;
      }
      
      i {
        position: relative;
      }

    `}</style>
  </footer>
)

module.exports = Footer
