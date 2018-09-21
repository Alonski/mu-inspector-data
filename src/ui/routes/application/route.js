import Route from "@ember/routing/route";

export default class ApplicationRoute extends Route {
  model() {
    return this.store.createRecord("foo", { name: "bar" });
  }
  afterModel(model) {
    console.log(model);
  }
}
