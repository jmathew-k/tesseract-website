import React, { useState } from "react";
import cn from "classnames";
import styles from "./SignIn.module.sass";
import Login from "../../components/Login";
import Icon from "../../components/Icon";
import Form from "./Form";
import Scan from "./Scan";

const SignIn = () => {
  const [scan, setScan] = useState(false);

  return (
		<Login
			// content='Don’t have an account?'
			// linkText='Sign up for free'
			// linkUrl='/sign-up'
		>
			<div className={styles.login}>
				<div className={styles.top}>
					<h3 className={cn('h3', styles.title)}>Sign in to Tesseract</h3>
					<div className={styles.info}>
						Please ensure you are correct url
					</div>
					<div className={styles.correct}>
						<Icon name='lock' size='24' />
						<div className={styles.url}>
							https://<span>tesseractxyz.com/sign-login</span>
						</div>
					</div>
				</div>
				{scan ? <Scan /> : <Form onScan={() => setScan(true)} />}
			</div>
		</Login>
	)
};

export default SignIn;
