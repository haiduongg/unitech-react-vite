import { Helmet } from 'react-helmet';

import PropTypes from 'prop-types';

const DocumentTitle = ({ title }: { title: string }) => {
	return (
		<Helmet>
			<title>{title === 'Home page' ? 'UniTech' : `${title} | UniTech Shop`}</title>
		</Helmet>
	);
};

DocumentTitle.propTypes = {
	title: PropTypes.string.isRequired,
};

export default DocumentTitle;
