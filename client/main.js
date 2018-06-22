import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import PageContainer from './../imports/ui/PageContainer';

Meteor.startup(()=>{
  ReactDOM.render(<PageContainer />,document.getElementById('app'));
});
