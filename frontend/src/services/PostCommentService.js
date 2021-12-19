import http from "../http-common";

class PostCommentService {
  getAll() {
    return http.get("/comment");
  }

  get(id) {
    return http.get(`/comment/${id}`);
  }

  create(data, formData) {
    console.log(data, formData)
    return http.post("/comment", data);
  }

  update(id, formdata) {
    return http.put(`/comment/${id}`, formdata);
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
