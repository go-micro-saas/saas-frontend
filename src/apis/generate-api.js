import path from 'path';
import fs from 'fs';
import {generateApi} from 'swagger-typescript-api';

// 批量生成API客户端
// async function generateAllApis() {
//   try {
//     for (const source of swaggerSources) {
//       // 确保输出目录存在
//       if (!fs.existsSync(source.output)) {
//         fs.mkdirSync(source.output, {recursive: true});
//       }
//
//       // 生成API客户端
//       await generateApi({
//         name: source.name,
//         input: source.input,
//         output: source.output,
//         axios: true,
//         httpClientType: 'axios',
//         generateClientClass: true,
//         generateRouteTypes: true,
//         generateResponses: true,
//         // 传递基础路径作为额外信息
//         extraTemplates: [],
//       });
//
//       console.log(`API client generated for ${source.input}`);
//     }
//   } catch (error) {
//     console.error('Error generating API clients:', error);
//   }
// }

const apiPathName = "api";
const swaggerPathName = "swagger";
const swaggerFileSuffix = ".swagger.json";

// 批量生成API客户端
async function generateAllApis() {
  // 结果
  const result = {
    code: 0,
    massage: "==> 成功执行：generate:api!!!",
    data: {}
  };

  // 开始
  try {
    // 基础信息
    const pwdPath = process.cwd();
    console.log(`==> 当前项目目录： ${pwdPath}`);
    const currentPath = import.meta.dirname;
    console.log(`==> 当前执行文件目录： ${currentPath}`);
    const apiPath = path.join(currentPath, apiPathName);
    console.log(`==> 输出api文件目录： ${apiPath}`);

    // 检查swagger文件目录是否存在
    const swaggerPath = path.join(currentPath, swaggerPathName);
    if (!fs.existsSync(swaggerPath)) {
      try {
        fs.mkdirSync(swaggerPath);
      } catch (err) {
        console.error('==> 创建swagger文件目录失败:', err);
      }
    }
    console.log(`==> swagger文件目录： ${swaggerPath}`);

    // 遍历swagger文件
    const entries = fs.readdirSync(swaggerPath);
    const swaggerFiles = [];
    for (const entry of entries) {
      const fullPath = path.join(swaggerPath, entry);
      const stats = fs.statSync(fullPath);
      if (stats.isFile() && entry.endsWith(swaggerFileSuffix)) {
        swaggerFiles.push(fullPath);
      }
    }
    if (swaggerFiles.length === 0) {
      console.log(`==> 未找到文件 *${swaggerFileSuffix}`);
      return result
    }

    // 编译api文件
    console.log("")
    for (const entryFile of swaggerFiles) {
      console.log(`==> 准备编译文件：${entryFile}`);
      let outputPath = path.basename(entryFile);
      if (outputPath.endsWith(swaggerFileSuffix)) {
        outputPath = outputPath.slice(0, -swaggerFileSuffix.length);
      }
      const generateParam = {
        input: entryFile,
        output: path.join(apiPath, outputPath),
        axios: true,
        httpClientType: 'axios',
        generateClientClass: true,
        generateRouteTypes: true,
        generateResponses: true,
        extraTemplates: [],
      }
      await generateApi(generateParam);
    }
  } catch (error) {
    // 失败
    result.code = 1;
    result.massage = "==> 生成 typescript-api 失败!!!"
  }
  console.log("")
  return result;
}

const result = await generateAllApis();
console.log("==> 执行结果：", result);
