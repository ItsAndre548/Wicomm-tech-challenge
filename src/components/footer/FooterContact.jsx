export default function FooterContact({contactNumber, contactemail}) {
    return(
                  <div class="contact">
                    <p class="footerTitle">CONTATO</p>
                    <p>WhatsApp -  {contactNumber}<br/>
                     E-mail - {contactemail} </p>
                  </div>
    )
}