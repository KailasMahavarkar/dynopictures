import Image from "next/image";
import Link from "next/link";

const CONSTANTS = {
    ICON_SIZE: 40,
}

const FooterBlock = () => {
	return (
		<footer className="footer" id="footer">
			{/* Footer Social*/}
			<div className="footer__social">
				
				<div className="footer__social__item footer__social__item-facebook">
					<a href="https://www.facebook.com/dyno.pictures">
						<Image
							src="/assets/social/facebook.svg"
							width={CONSTANTS.ICON_SIZE}
							height={CONSTANTS.ICON_SIZE}
							alt="facebook"
						/>
					</a>
				</div>
				<div className="footer__social__item footer__social__item-instagram">
					<a href="https://www.instagram.com/dyno_pictures/">
						<Image
							src="/assets/social/instagram.svg"
							width={CONSTANTS.ICON_SIZE}
							height={CONSTANTS.ICON_SIZE}
							alt="instagram"
						/>
					</a>
				</div>
				<div className="footer__social__item footer__social__item-instagram">
					<a
						target="_blank"
						href="https://api.whatsapp.com/send/?phone=918291219363&text&app_absent=0" rel="noreferrer"
					>
						<Image
							src="/assets/social/whatsapp.svg"
							width={CONSTANTS.ICON_SIZE}
							height={CONSTANTS.ICON_SIZE}
							alt="instagram"
						/>
					</a>
				</div>
			</div>

			{/* Footer Main */}
			<div className="footer__main">
				<div className="footer__main__rights">
					{`© ${new Date().getFullYear()} All Rights Reserved by`}{" "}
					<span>Dyno Pictures</span>
				</div>
				<div className="footer__main__credits">
					Website Designed and Developed by{" "}
					<Link
						href="https://github.com/kailasmahavarkar"
						passHref={true}
					>
						Kailas Mahavarkar
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default FooterBlock;
