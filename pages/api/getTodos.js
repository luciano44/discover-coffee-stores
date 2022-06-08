const getCoffeeStoresByLocation = async (req, res) => {
  const { id } = req.query;

  // fetch("https://jsonplaceholder.typicode.com/todos/")
  //   .then((r) => r.json())
  //   .then((r) => res.status(200).json({ response: r }))
  //   .catch((err) =>
  //     res.send(500).json({ err: "something went seriously wrong" })
  //   );

  console.log(req.query);

  const idQ = id ? id : "";
  try {
    const responseData = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${idQ}`
    );
    const response = await responseData.json();

    res.status(200).json({ response });
  } catch (err) {
    res.send(500).json({ err: "something went seriously wrong" });
  }
};

export default getCoffeeStoresByLocation;
