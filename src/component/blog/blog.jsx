import React, { Component } from "react";
import Axios from "axios";
import ShowBlog from "../ShowBlog/ShowBlog";
import Spinner from "../Spinner/Spinner";



export class Blog extends Component {



  constructor(props) {
    super(props);

    this.state = {
      profile: {
        ptitle: "",
        name: "",
        avtar: "",
        profileurl: "",
        URL: "",
      },
      item: [],
      isloading: true,
      error: null,
    };
  }
  mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@falilatowolabi0";

  componentDidMount() {
    Axios.get(this.mediumURL).then((data) => {
      // console.log(data.data)
      const avatar = data.data.feed.image;
      console.log("ava", avatar);
      const profileLink = data.data.feed.link;
      const url = data.data.feed.url;
      const res = data.data.items; //This is an array with the content. No feed, no info about author etc..
      console.log("rse", res);
      const posts = res.filter((item) => item.categories.length > 0);
      // console.log(`post is ${posts}`);

      const title = data.data.feed.title;

      this.setState(
        (pre) => ({
          profile: {
            ...pre.profile,
            ptitle: title,
            profileurl: profileLink,
            avtar: avatar,
            URL: url,
          },
          item: res,
          isloading: false,
        }),
        () => {
          console.log(this.state);
        }
      );
      //   console.log("The data needed", data);
      console.log("the data", data.data.feed);
    });
    //   .catch((e) => {
    //     this.setState({ error: e.toJSON() });
    //     console.log(e);
    //   });
  }
  render() {
    let post;

    if (this.state.item) {
      post = this.state.item.map((post, index) => (
        <ShowBlog key={index} {...post} {...this.state.profile} {...index} />
      ));
    }
    if (this.state.isloading) {
      post = <Spinner />;
    }
    if (this.state.error) {
      let error = this.state.error.code
        ? this.state.error.code
        : this.state.error.name;
      let errorMsg = this.state.error.message;
      post = (
        <>
          <h2 className="red center1">{error}</h2>
          <p className="errorMessage center1">{errorMsg}</p>
        </>
      );
    }
    return (
      <div className=" w-full">
        <div className=" flex justify-between w-full flex-wrap md:gap-0 gap-10">
          {this.state.item.map((post, index) => (
            <ShowBlog
              key={index}
              {...post}
              {...this.state.profile}
              {...index}
            />
          ))}

          {/* {post} */}
        </div>
      </div>
    );
  }
}

export default Blog;
