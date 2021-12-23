import http from "../http-common";

class PostCommentService {
  getAll() {
    return http.get("/comment");
  }

  get(id) {
    return http.get(`/comment/${id}`);
  }

  create(formData) {
    console.log(formData)
    return http.post("/comment", formData);
  }

  update(id, data) {
    return http.put(`/comment/${id}`, data);
  }

  updatePhoto(id, formData) {
    return http.put(`/comment/${id}`, formData);
  }

  delete(id) {
    return http.delete(`/comment/${id}`);
  }

  deleteComment(id) {
    return http.delete(`/comment/${id}`);
  }

  deleteAll() {
    return http.delete(`/comment`);
  }

  findByTitle(description) {
    return http.get(`/posts?description=${description}`);
  }
}

export default new PostCommentService();
