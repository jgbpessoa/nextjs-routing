import { useRouter } from "next/router";

function Doc() {
  const router = useRouter();
  // Array of params after docs/
  // Make sure to give the params variable an initial file so our code won't throw a runtime error because of the pre-rendering feature in Next.js
  const { params = [] } = router.query;

  if (params.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params[0]} and concept {params[1]}
      </h1>
    );
  } else if (params.length === 1) {
    return <h1>Viewing docs for feature {params[0]}</h1>;
  }

  return <h1>Docs Home Page</h1>;
}

export default Doc;
