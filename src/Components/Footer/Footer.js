import React from 'react';
import './Footer.css';

const Footer =()=>{
	return (
		<div className="Footer">
			<div className="OurSocialMedia">
				<a href="https://www.instagram.com/uttarakhandtheheaven" target="_blank" rel="noopener noreferrer"><img src="https://uttarakhandtheheaven.com/images/insta.png" alt="Insta"/></a>
				<a href="https://www.facebook.com/uktheheaven" target="_blank" rel="noopener noreferrer"><img src="https://uttarakhandtheheaven.com/images/fb.png" alt="Fb"/></a>
				<a href="mailto:theheavenuttarakhand@gmail.com" target="_blank" rel="noopener noreferrer"><img src="https://uttarakhandtheheaven.com/images/mail.png" alt="Email"/></a>
			</div>
			<div className="shortDesc">
				<p>Made With Love In High Hills Of Uttarakhand - The Heaven</p>
			</div>
		</div>
	)
}
export default Footer;

