import Nullstack from 'nullstack';
import './Home.scss';
import Logo from 'nullstack/logo';
import StrokeStar from 'poisonicon/star/stroke'
import FillStar from 'poisonicon/star/fill'

class Home extends Nullstack {

  showNulla = false;
  starred = false;

  prepare({ project, page }) {
    page.title = `${project.name} - Nulla-chan te dá as boas vindas!`;
    page.description = `${project.name} foi feito com Nullstack`;
  }

  renderLink({ children, href }) {
    const link = href + '?ref=create-nullstack-app';
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  render({ project }) {
    return (
      <section>
        <article>
          <Link href="https://nullstack.app/pt-br">
            <Logo height={60} light />
          </Link>
          <h1> {project.name} </h1>
          <p>
            Fizemos alguns exemplos para te ajudar a começar! Dê uma olhada na
            <Link href="vscode://file/C:/Users/T-Gamer/Documents/workspace/opensource/bug-svg-ternary/src">
              pasta src
            </Link>.
          </p>
          <span>
            Dica: nós temos uma
            <Link href="vscode:extension/ChristianMortaro.vscode-nullstack">
              Extensão para VS Code
            </Link>
          </span>
          <ul>
            <li>
              <button onclick={{starred: !this.starred}}>Clique para dar uma estrela: {this.starred ? <FillStar /> : <StrokeStar />}</button>
            </li>
            {
              this.starred && <li>
                Obrigado por nos dar uma estrela, mas há um bug e ela não fica preenchida :(
              </li>
            }
          </ul>
          <div>
            <span>
              Como diria da Vinci:
            </span>
            <blockquote>
              "A simplicidade é a sofisticação suprema"
            </blockquote>
          </div>
        </article>
        <button onclick={{showNulla: !this.showNulla}}>{ !this.showNulla ? "Mostrar" : "Esconder" } Nulla</button>
        {
          this.showNulla && (
            <aside>
              <Link href="https://nullstack.app/pt-br/waifu">
                <img src="/nulla-chan.webp" alt="Nulla-Chan: waifu oficial do Nullstack" />
              </Link>
            </aside>
          )
        }
        
      </section>
    )
  }

}

export default Home;