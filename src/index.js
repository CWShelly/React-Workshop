<<<<<<< HEAD
var div = React.DOM.div
var h1 = React.DOM.h1

//  composite component
var Title = React.createClass({
  render() {
    return (
      div(null,
        h1(null, this.props.title)
      )
    )
  }
})

var HelloWorld = (
  div( null,
    React.createElement(Title, {title: 'Hello World Class'})
  )
)

ReactDOM.render(HelloWorld, document.getElementById('app'))
=======
var div = React.DOM.div;
var h1 = React.DOM.h1;

//  composite component
var Title = React.createClass({
    render() {
        return (
      div(null,
        h1(null, this.props.title)
      )
    );
    }
});

var HelloWorld = (
  div( null,
    React.createElement(Title, {title: 'Hello World the Class'})
  )
);

ReactDOM.render(HelloWorld, document.getElementById('app'));
>>>>>>> eaf03de2eac806b83cc8173c1e185ee1a13e5c85
