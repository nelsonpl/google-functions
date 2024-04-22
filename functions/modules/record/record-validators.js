exports.post = (body) => {
  const {name} = body

  if (!name || !name.trim()) {
    return {message: "Name is required"}
  }

  return null
}

