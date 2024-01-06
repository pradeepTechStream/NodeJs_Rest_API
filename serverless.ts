import type { AWS } from '@serverless/typescript';
import {
    getAllEmployee
} from '@functions/employee';


const serverlessConfiguration: AWS = {
    service: 'sbly-backend-nodejsapp',
    frameworkVersion: '3',
    plugins: ['serverless-esbuild', 'serverless-offline'],
    provider: {
        name: 'aws',
        runtime: 'nodejs14.x',
        region: 'ap-south-1',
        apiGateway: {
            minimumCompressionSize: 1024,
            shouldStartNameWithService: true
        },
        environment: {
            AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
            NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000'
        }
    },
    // import the function via paths
    functions: {
        getAllEmployee,
    },
        package: {
        individually: true
    },
    custom: {
        esbuild: {
            bundle: true,
            minify: false,
            sourcemap: true,
            exclude: ['aws-sdk', 'pg', 'sqlite3', 'tedious', 'pg-hstore'],
            target: 'node14',
            define: { 'require.resolve': undefined },
            platform: 'node',
            concurrency: 10
        }
    }
};

module.exports = serverlessConfiguration;
