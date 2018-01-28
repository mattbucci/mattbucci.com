const Projects = () => {
    return (
        <div className="blog">
            <div className="content">
                <a href="/" className="post__preview">
                    <img className="post__preview__image" src="http://codeless.co/folie/minimal/wp-content/uploads/2017/06/christian-gertenbach-179213.jpg"/>
                    <h2 className="post__preview__title"> Recent Trends</h2>
                    <h5 className="post__preview__date">January 5th 2018</h5>
                    <p className="post__preview__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel est suscipit, fringilla augue eu, gravida massa. Nulla in leo arcu. Vivamus venenatis rhoncus posuere. Proin id erat et dolor aliquet pretium a a turpis. Aenean lacinia leo et quam euismod luctus. Donec nisl lectus, sollicitudin id lectus sit amet, tristique pulvinar ante. Nullam eu augue sit amet neque malesuada placerat. Aenean at erat ultricies, ullamcorper nisl quis, tristique lacus. Donec suscipit sem in tristique rutrum. Donec id facilisis felis, interdum ornare nisi. Vestibulum mollis sed diam vitae commodo. Sed sit amet est ac augue vulputate bibendum. Cras vel lacus hendrerit, porttitor ipsum in, fermentum felis. Donec condimentum posuere massa eu fermentum. Aliquam hendrerit consectetur congue. Cras euismod ligula eu massa varius convallis.
                    </p>
                </a>
            </div>
            <div className="sidebar">
                <input type="textbox" placeholder="Search" />
                <hr />
                <h4>Categories</h4>
            </div>
        </div>
    );
};

export default Projects;
