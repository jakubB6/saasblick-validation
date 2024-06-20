export const useFetch = (email: string) => {
  const joinNewsletter = async (email: string) => {
    const request = await fetch(`/api/join`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });

    if (!request.ok) {
      return false;
    }

    return true;
  };

  return joinNewsletter(email);
};

export default useFetch;
