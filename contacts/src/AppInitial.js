import React, { Component } from 'react';
//使用组件组合
class ContactList extends React.Component {
  render() {
    //每个Component都有this.props用来接收组件传入的属性
    const people = this.props.contacts
    return <ol>
    {people.map(oPeople => (
        <li key={oPeople.name}>{oPeople.name}</li>
      ))}
    </ol>
  }
}

class AppInitial extends Component {
  render() {
    return (
      <div className="AppInitial">
        <ContactList contacts={[{"name": "Michael"}, {"name": "Tony"}, {"name": "Steven"}]}/>
        <ContactList contacts={[{"name": "Amanda"}, {"name": "Richard"}, {"name": "Lily"}]}/>
      </div>
    );
  }
}

export default AppInitial;
