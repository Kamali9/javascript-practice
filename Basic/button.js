// import React from 'react';
// import PropTypes from 'prop-types';
// import { Loader } from '../loader';
// import './button.css';

// export const Button = ({ variant, size, label, type, className, onClick, disabled, isLoading, ...nest }) => (
//     <button className={`btn btn_${variant} btn_${size} ${className}`} type={type} onClick={onClick} disabled={isLoading || disabled} {...nest}>
//         {isLoading ? (
//             <span>
//                 <div className="flex flex-col items-center justify-center w-full h-full text-gray-500" style={{ height: '24px', minWidth: '70px' }}>
//                     <Loader />
//                 </div>
//             </span>
//         ) : (
//             <span>{label}</span>
//         )}
//     </button>
// );

// export const IconButton = ({ variant, size, icon, type, className, label, onClick, disabled, ...nest }) => (
//     <button className={`icon icon_${variant} icon_${size} ${className}`} type={type} onClick={onClick} disabled={disabled} {...nest}>
//         {icon} {label}
//     </button>
// );

// Button.propTypes = {
//     variant: PropTypes.string,
//     size: PropTypes.string,
//     label: PropTypes.string,
//     type: PropTypes.string,
//     className: PropTypes.string,
//     onClick: PropTypes.func,
//     disabled: PropTypes.bool,
//     isLoading: PropTypes.bool,
// };

// Button.defaultProps = {
//     variant: 'primary',
//     size: 'md',
//     label: '',
//     type: 'button',
//     className: '',
//     disabled: false,
//     isLoading: false,
// };

// IconButton.propTypes = {
//     variant: PropTypes.string,
//     size: PropTypes.string,
//     type: PropTypes.string,
//     className: PropTypes.string,
//     onClick: PropTypes.func,
//     disabled: PropTypes.bool,
// };

// IconButton.defaultProps = {
//     variant: 'primary',
//     size: 'sm',
//     type: 'button',
//     className: '',
//     disabled: false,
// };


//m

// import classes from './style.module.css';
// export const Button = {
// 	defaultProps: {
// 		variant: 'filled'
// 	},
// 	classNames: {
// 		root: classes.root
// 	}
// };



// .root {
// 	&:hover {
// 		background-color: var(--primary-hover-color);
// 	}
// 	&[data-variant='default'] {
// 		border: rem(1) solid var(--widget-bg-color);
// 		color: var(--text-color);
// 		background-color: var(--background-color);
// 		&:hover {
// 			background-color: var(--widget-bg-color);
// 			color: var(--white);
// 		}
// 	}
// 	&[data-variant='outline'] {
// 		border: rem(1) solid var(--border-color);
// 		color: var(--text-color);
// 		background-color: transparent;
// 		&:hover {
// 			background-color: var(--button-secondary-color);
// 			color: var(--text-color);
// 		}
// 	}
// 	&[data-variant='filled'] {
// 		background-color: var(--primary-color);
// 		color: var(--white);
// 		&:hover {
// 			background-color: var(--primary-hover-color);
// 		}
// 	}
// 	&[data-variant='white'] {
// 		background-color: var(--white);
// 		color: var(--primary-color);
// 	}
// 	&[data-variant='subtle'] {
// 		background-color: transparent;
// 		color: var(--primary-color);
// 		&:hover {
// 			background-color: var(--button-subtle);
// 		}
// 	}
// 	&[data-variant='transparent'] {
// 		background-color: transparent;
// 		color: var(--primary-color);
// 		&:hover {
// 			background-color: transparent;
// 		}
// 	}
// 	&[data-variant='light'] {
// 		background-color: var(--button-light-color);
// 		color: var(--primary-color);
// 		&:hover {
// 			background-color: var(--button-light-hover-color);
// 		}
// 	}
// 	&:where(:disabled:not([data-loading]), [data-disabled]:not([data-loading])) {
// 		background-color: var(--disabled-bg-color) !important;
// 		color: var(--disabled-text-color) !important;
// 	}
// }
