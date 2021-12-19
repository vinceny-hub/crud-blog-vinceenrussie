import http from "../http-common";

class UploadFilesService {

upload(formData, data) {
  return http.post("posts", formData, data);
}
update(id, formData) {
  return http.put(`posts/${id}`, formData);
}
 }

export default new UploadFilesService()