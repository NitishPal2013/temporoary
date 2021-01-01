import React from "react";
import theme from "theme";
import { Theme, Link, Text, Em, Image, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
			sm-min-width="43px"
			sm-display="inline-flex"
			sm-flex-direction="column"
			sm-flex-wrap="wrap"
			sm-font="normal small-caps 11px --fontFamily-googleSacramento"
			sm-background="--secondaryGradient"
		>
			<Override slot="SectionContent" sm-font="19px --fontFamily-googleSacramento" />
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px"
			/>
			<Text
				as="h1"
				margin="8px 0px 32px"
				color="--dark"
				max-width="850px"
				sm-font="700 31.5px --fontFamily-googleSacramento"
			>
				<Em font-weight="normal">
					Hi! This is your website where you will know about some web development languages.
		Hope you will like it .
				</Em>
			</Text>
		</Section>
		<Section sm-height="222px" sm-display="flex" sm-background="#b3d381 url()">
			<Override slot="SectionContent" sm-align-items="baseline" sm-width="86px" sm-height="230px" />
			<Image
				width="64px"
				height="64px"
				src="https://uploads.quarkly.io/5feecdc9f4d20b00220570c4/images/download%20(1).png?v=2021-01-01T09:37:03.188Z"
				sm-height="102px"
				sm-left="8px"
				sm-right="286px"
				sm-width="106px"
				sm-bottom="748px"
				sm-position="absolute"
				sm-top="317px"
			/>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="--headline1"
				md-font="--headline7"
				color="--dark"
				max-width="850px"
				sm-height="146px"
				sm-align-self="auto"
				sm-display="flex"
				sm-flex-wrap="wrap"
				sm-padding="13px 0px 0px 0px"
				sm-bottom="557px"
				sm-left="7px"
				sm-right="2px"
				sm-top="411px"
				sm-width="391px"
				sm-position="absolute"
			>
				<div>
					1.
				</div>
				Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.
			</Text>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
			sm-background="#b3d381 url()"
		>
			<Override slot="SectionContent" sm-height="222px" />
			<Image
				width="64px"
				height="64px"
				src="https://uploads.quarkly.io/5feecdc9f4d20b00220570c4/images/CSS3_logo_and_wordmark.svg.png?v=2021-01-01T08:57:39.829Z"
				sm-height="100px"
				sm-width="117px"
				sm-bottom="450px"
				sm-left="14px"
				sm-right="269px"
				sm-top="617px"
				sm-position="absolute"
			/>
			<Box />
			<Text
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px"
			/>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="--headline1"
				md-font="--headline7"
				color="--dark"
				max-width="850px"
				sm-height="140.375px"
				sm-bottom="265.625px"
				sm-top="721px"
				sm-left="6px"
				sm-right="5px"
				sm-width="389px"
				sm-position="absolute"
			>
				<div>
					2.
				</div>
				Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.
			</Text>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
			sm-height="203px"
			sm-hover-flex-direction="column"
			sm-background="#b3d381 url()"
		>
			<Override slot="SectionContent" sm-height="277px" sm-padding="0 0px 0px 0px" />
			<Image
				width="64px"
				height="64px"
				src="https://uploads.quarkly.io/5feecdc9f4d20b00220570c4/images/JavaScript-Logo.png?v=2021-01-01T09:01:27.316Z"
				sm-width="123px"
				sm-height="107px"
				sm-align-self="flex-start"
				sm-position="absolute"
				sm-bottom="158px"
				sm-top="902px"
				sm-left="8px"
				sm-right="269px"
			/>
			<Box />
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="--headline1"
				md-font="--headline7"
				color="--dark"
				max-width="850px"
				sm-bottom="-32px"
				sm-height="154px"
				sm-top="1005px"
				sm-left="17px"
				sm-right="10px"
				sm-width="373px"
				sm-position="absolute"
			>
				<div>
					3.
				</div>
				JavaScript often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.
			</Text>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});