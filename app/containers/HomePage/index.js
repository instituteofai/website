/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Header from 'components/Header/Header';
import messages from './messages';

export default function HomePage() {
  return (
    <>
      <Header />
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
    </>
  );
}
