import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import docker from './icons8-docker-50.png';
import powerbi from './powerbi.png';
import pandas from './pandas.png';
import tableau from './tableau.png';
import aws from './aws.png';    
import jira from './jira.png';  
import react from './react.png';
import dashboard_icon from './dashboard.png';
import etl_icon from './etl.png';  
import analytics_icon from './analytics.png';
import pm_icon from './project.png';


export const assets = {
    user_image,
    dashboard_icon,
    etl_icon,   
    analytics_icon,
    pm_icon,
    docker,
    powerbi,
    pandas,
    tableau,
    aws,
    jira,
    react,
    vscode,
    figma,
    git,
    mongodb,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
  {
    bgImage: 'work-1.png',          //  <- string path
    title:   'Toy Store Revenue Analytics',
    description: 'Power BI · SQL Data Modeling',
    code:    'https://github.com/HimDahiya/Toy_Manufacturer_In_Mexico',
  },
  {
    bgImage: 'work-2.png',
    title:   'AI Driven Supply Chain Optimisation for Montreal Transit Dynamics',
    description: 'AnyLogic System-Dynamics · Python (Scikit-learn)',
    code:    'https://github.com/HimDahiya/Optimizing-supply-chains-with-predictive-analytics',
  },
  {
        title: 'Data Science Job Market Trends ',
        description: 'Power Bi · Data Analytics',
        bgImage: '/work-3.png',
        code: ' https://github.com/HimDahiya/data-science-salary-trends'},
  {
        title: 'Date Fruit Quality Classifier',
        description: 'Python(TensorFlow) PCA/Dimensionality Reduction',
        bgImage: '/work-4.png',
        code: 'https://github.com/HimDahiya/Classification-of-Date-fruit-using-PCA-and-ML'
  },
];
// ─── Services cards (Business / Data focus) ────────────────
export const serviceData = [
    {
      icon: assets.dashboard_icon,       
      title: 'Data & BI Dashboards',
      description:
        'Design, develop and test Tableau / Power BI dashboards that turn KPIs into board-ready stories.',
    },
    {
      icon: assets.etl_icon,
      title: 'ETL & Data Engineering',
      description:
        'Build zero-touch Snowflake and AWS pipelines that cleanse, model and govern data at scale.',
    },
    {
      icon: assets.analytics_icon,
      title: 'Advanced Analytics',
      description:
        'Deploy Python & SQL models for forecasting, risk scoring and cost-benefit analysis.',
    },
    {
      icon: assets.pm_icon,
      title: 'Requirements & PMO',
      description:
        'Drive SDLC / Agile projects—BRD, FRD, Jira backlog, stakeholder workshops & change enablement.',
    },
  ];
  

export const infoList = [
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Masters of Engineering in Quality Systems \n\nBachleors of Technology in Computer Science' },
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Tech Stack', description: 'Python, SQL, JavaScript, Next Js, UNIX/Linux Scripting' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Certifications', description: 'ITIL- 4 Foundation, \nAWS Certified Cloud Practitioner, \nBI Foundations with SQL ETL and Data Warehousing Specialization - IBM' }
];


export const toolsData = [
    { icon: vscode,  name: 'VS Code' },
    { icon: docker,  name: 'Docker' },
    { icon: react,   name: 'React' },
    { icon: aws,     name: 'AWS' },
    { icon: mongodb, name: 'MongoDB' },
    { icon: figma,   name: 'Figma' },
    { icon: pandas,  name: 'Pandas' },  
    { icon: tableau, name: 'Tableau' },
    { icon: powerbi, name: 'Power BI' },
    { icon: git,     name: 'Git' },
  ];
  
/*export const toolsData = [
    assets.vscode, assets.mongodb, assets.figma, assets.git, assets.docker, assets.powerbi , assets.pandas, assets.tableau, assets.aws, assets.jira, assets.react
];*/