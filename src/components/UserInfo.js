export default class UserInfo {
  constructor({ nameSelector, jobSelector, avatarSelector }) {
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector);
    this._avatar = document.querySelector(avatarSelector);
  }
  getUserInfo() {
    return {
      userName: this._name.textContent,
      userJob: this._job.textContent,
      userAvatar: this._avatar.src,
      id: this._userId,
    };
  }
  setUserInfo(data) {
    this._name.textContent = data.name;
    this._job.textContent = data.about;
    if (data.avatar) {
      this._avatar.src = data.avatar;
    }
    if (data._id) {
      this._userId = data._id;
    }
  }
}
