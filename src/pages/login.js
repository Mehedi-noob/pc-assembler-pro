import auth from "@/firebase/firebase.auth.js";
import styles from "@/styles/Login.module.css";
import { GithubOutlined } from "@ant-design/icons";
import { signIn } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const LoginPage = () => {
  const router = useRouter();
  const {callbackUrl} = router.query;
  console.log("callback", callbackUrl)
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  console.log(user);

  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className={styles.form}>
        <h3>LOGIN</h3>
        <div className={styles.social_icons}>
          <GithubOutlined
            onClick={() =>
              signIn("github", {
                callbackUrl: callbackUrl || "http://localhost:3000/",
              })
            }
          />
        </div>
        <hr />
      </div>
    </div>
  );
};

export default LoginPage;
