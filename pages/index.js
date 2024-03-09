import Head from "next/head";

import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Profiles</title>
        <meta name="description" content="Profiles of the users" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <h2>This is Home Page</h2>
            </div>
            <p>This is an profile app we just login or register</p>
          </div>
        </div>
      </main>
    </>
  );
}
