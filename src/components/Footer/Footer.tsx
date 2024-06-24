import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
// import discordIcon from '../../assets/discord.png'

export function Footer(props:any) {
  const {data} = props;
  
  return (
    <Container className="footer">
      {/* <a href="https://rohit.in" className="logo">
        <span>www.rohit</span>
        <span>.in</span>
      </a> */}
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          <span>By {data.name}❤️</span>
        </p>
      </div>
      <div className="social-media">
            {data.socialmedia.map((item: any, index: number) => {
              return <a key={index} href={item?.url} target="_blank" rel="noreferrer">
                <img src={item?.icon} alt={item?.label} />
              </a>;
            })}
      </div>
    </Container>
  )
}
