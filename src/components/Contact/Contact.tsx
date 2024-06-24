import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(props:any){
  const {data} = props;

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href={`mailto:${data.email}`}><img src={emailIcon} alt="Email" /></a> 
          <a href={`mailto:${data.email}`}>{data.email}</a>
        </div>
        <div>
        <a href={`tel:+91${data.mobile}`}><img src={phoneIcon} alt="Phone No" /></a>
          <a href={`tel:+91${data.mobile}`}>(+91) {data.mobile}</a>
        </div>  
      </div>
      {/* <Form></Form> */}
    </Container>
  )
}