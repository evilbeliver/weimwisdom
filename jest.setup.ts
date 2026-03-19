import '@testing-library/jest-dom';

jest.mock('next/link', () => {
	const React = require('react');
	const Link = React.forwardRef(
		(
			{ href, children, ...props }: { href: string; children: React.ReactNode },
			ref: React.ForwardedRef<HTMLAnchorElement>,
		) => React.createElement('a', { href, ref, ...props }, children),
	);
	Link.displayName = 'NextLinkMock';

	return {
		__esModule: true,
		default: Link,
	};
});
