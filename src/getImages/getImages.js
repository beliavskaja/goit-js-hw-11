import axios from "axios";

export async function getImages(name, page) {
  const baseUrl = `https://pixabay.com/api/?key=24444967-1ec36e6022e36a623505c4c9a&q=${name}&per_page=40&page=${page}&image_type=photo&orientation=horizontal&safesearch=true`;
  return await axios.get(baseUrl);
}