class Utils {
  static isEmpty(value) {
    return (
      value === null || value === undefined || value.toString().trim() === ""
    );
  }

  static get_current_root_url() {
    return window.location.origin + "/";
  }

  static isNumeric(num) {
    return !isNaN(num);
  }

  static async sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  static SetWindowTitle(title) {
    window.document.title = "DBPromoter : " + title;
  }

  static isValidEmail(email) {
    // var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // // console.log(re.test(email));
    // return re.test(email);
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}

export default Utils;
