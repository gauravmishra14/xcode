import axios from "axios";


export const login = `https://xebiascart.herokuapp.com/users?username=`;
export const products = `https://xebiascart.herokuapp.com/products`;
export const search = `https://xebiascart.herokuapp.com/products?title=`;
export const filter = `https://xebiascart.herokuapp.com/filters`;

export const getMethod = async (url: string): Promise<any> => {
  try {
    const head = {
      "Content-Type": "application/json",
    };
    return await axios
      .get(url, { headers: head })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  } catch (error) {
    console.log(error);
  }
};
