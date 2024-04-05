import { Helmet } from 'react-helmet';
import { HelmetProvider } from 'react-helmet-async';

import PropTypes from 'prop-types';

const DocumentTitle = ({ title }: { title: string }) => {
	return (
		<HelmetProvider>
			<Helmet>
				<title>{title === 'Home page' ? 'UniTech - Technology Shopping' : `${title} | UniTech Shop`}</title>
			</Helmet>
		</HelmetProvider>
	);
};

DocumentTitle.propTypes = {
	title: PropTypes.string.isRequired,
};

export default DocumentTitle;
