#! /usr/bin/env node
import { logger } from '@nrwl/devkit';
import fs from 'fs-extra';
import path from 'path';
const thisPath = import.meta.url.replace('file:///', '');
const thisModulePath = path.join(path.dirname(thisPath), '..');
const processPath = process.cwd();
const packageJsonPath = path.join(processPath, 'package.json');
const fastlaneConfigFilesPath = path.join(thisModulePath, 'files');
logger.info('thisPath');
logger.info(thisPath);
logger.info('thisModulePath');
logger.info(thisModulePath);
logger.info('fastlaneConfigFilesPath');
logger.info(fastlaneConfigFilesPath);
logger.info('processPath');
logger.info(processPath);
logger.info('packageJsonPath');
logger.info(packageJsonPath);
if (!fs.pathExistsSync(packageJsonPath)) {
    logger.error('Not in the root folder. \n ' +
        'Be sure to run this command on the root folder (same as package.json)');
    process.exit(1);
}
if (!fs.pathExistsSync(fastlaneConfigFilesPath)) {
    logger.error('cant find files folder!!');
    process.exit(1);
}
logger.info('creating fastlane config files!!!!!');
const fastlaneDestinationPath = path.join(processPath, 'fastlane');
if (!fs.pathExistsSync(fastlaneDestinationPath)) {
    fs.mkdirSync(fastlaneDestinationPath);
}
try {
    fs.copySync(fastlaneConfigFilesPath, fastlaneDestinationPath);
    logger.info('files were copied!!!');
}
catch (e) {
    logger.error('error copying file!!!!!');
    logger.error(e);
}
//# sourceMappingURL=create-fastlane-config.js.map