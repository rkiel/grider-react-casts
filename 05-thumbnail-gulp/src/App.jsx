    var options = {
      thumbnailData: [ {
        title:  'See Tutorials',
        number: 32,
        header: 'Learn React',
        description: 'React is a fantastic new libary for making fast, dynamic pages. React is a fantastic new libary for making fast, dynamic pages. React is a fantastic new libary for making fast, dynamic pages. React is a fantastic new libary for making fast, dynamic pages.     React is a fantastic new libary for making fast, dynamic pages.  ',
        imageUrl: 'https://cdn.auth0.com/blog/react-js/react.png'
      }, {
        title:  'See Courses',
        number: 25,
        header: 'Learn Gulp',
        description: 'Gulp will speed up your development workflow. Gulp will speed up your development workflow. Gulp will speed up your development workflow.    Gulp will speed up your development workflow.  ',
        imageUrl: 'https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png'
      } ]
    };

    // step 2 - instantiate class and render
    var element = React.createElement(ThumbnailList, options);

    // step 3 - place instantiation in my body tag
    React.render(element, document.querySelector('.container'));
