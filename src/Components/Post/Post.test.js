///<reference types='jest' />
///<reference types='mocha' />
// /<reference types='react-test-renderer'/>
import React from "react";
import Post from "./Post";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../../redux/store";

describe("Post Component", () => {
  let component;
  let testInstance;
  let testUser = {
    userId: 0,
    email: "blackbirdreviews@yahoo.com",
  };
  let examplePost = {
    title: "An example Review",
    likes: 1,
    userId: 0,
    image: "https://loremflickr.com/200/200",
    review:
      "Donec iaculis, libero gravida pellentesque convallis, odio metus vulputate dui, eu tristique eros est a lacus.\
     Suspendisse commodo, mauris quis varius pretium, orci mi tempus lacus, at finibus nibh nulla vitae lectus. Aliquam erat volutpat. Donec maximus pharetra turpis, at consequat lorem porttitor quis. Sed vehicula molestie purus in elementum. Suspendisse rutrum lectus nec auctor lacinia. Cras pulvinar fermentum nulla ut efficitur.\
     Ut maximus lacinia lectus ac tempus. Phasellus nibh nulla, tincidunt vel justo eget, ultricies bibendum massa.\
     Cras rutrum sapien quis nibh rhoncus, quis dictum enim luctus.\
     Curabitur rhoncus pellentesque elementum. Mauris aliquet imperdiet fermentum. \
     Nam lobortis faucibus mi, eu tincidunt nisi posuere a. Sed fringilla malesuada tempus. \
     Nunc nec faucibus lorem. Nulla facilisi. Nulla sed erat vitae nunc ultricies mollis id at odio. \
     Donec eros diam, elementum non nibh id, efficitur cursus est.",
  };
  beforeEach(() => {
    component = renderer.create(
      <Provider store={store}>
        <Post
          image={examplePost.image}
          review={examplePost.review}
          title={examplePost.title}
          likes={examplePost.likes}
        />
      </Provider>
    );
    testInstance = component.root;
  });
  test("Should have the correct DOM structure when the user is not logged in", () => {
    let image = testInstance.findByType("img");
    let titleElement = testInstance.findByProps({ className: "title" });
    let titleText = titleElement.children[0];
    let reviewElement = testInstance.findByProps({ className: "review" });
    let reviewText = reviewElement.children[0];
    let likeButton = testInstance.findByProps({
      type: "button",
      className: "like",
    });
    let likeButtonText = likeButton.children[0];
    let shareButton = testInstance.findByProps({
      type: "button",
      className: "share",
    });
    let shareButtonText = shareButton.children[0];
    expect(image.props.src).toEqual(examplePost.image);
    expect(titleText).toEqual(examplePost.title);
    expect(reviewText).toEqual(examplePost.review);
    expect(shareButtonText).toEqual("Share");
    expect(likeButtonText.trim()).toEqual(`Like ${examplePost.likes}`);
    try {
      testInstance.findByProps({ className: "edit-delete" });
      throw Error("edit delete should not exist now");
    } catch (e) {}
  });
});
