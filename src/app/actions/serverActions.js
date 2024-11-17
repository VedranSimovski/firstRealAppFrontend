"use server"

export const submitFormData = async (formData) => {
  const response = await fetch(`${process.env.SERVER_BACKEND_URL}/db/save/firstentry`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // or 'application/x-www-form-urlencoded' for traditional forms
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    return { message: "OK" }
  } else {
    return { message: "NOK" }
  }
}