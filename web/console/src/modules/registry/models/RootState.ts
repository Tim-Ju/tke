import { WorkflowState } from '@tencent/qcloud-redux-workflow';
import { FetcherState } from '@tencent/qcloud-redux-fetcher';
import { ApiKey, ApiKeyFilter, ApiKeyCreation } from './ApiKey';
import { Repo, RepoFilter, RepoCreation } from './Repo';
import { Image, ImageFilter, ImageCreation } from './Image';
import { RouteState } from '../../../../helpers';
import { ListModel } from '@tencent/redux-list';

type ApiKeyWorkflow = WorkflowState<ApiKey, void>;
type ApiKeyCreateWorkflow = WorkflowState<ApiKeyCreation, void>;
type RepoWorkflow = WorkflowState<Repo, void>;
type RepoCreateWorkflow = WorkflowState<RepoCreation, void>;
type ImageWorkflow = WorkflowState<Image, void>;
type ImageCreateWorkflow = WorkflowState<ImageCreation, void>;

export interface RootState {
  /** 路由 */
  route?: RouteState;

  /** -------- 访问凭证相关 --------- */

  apiKey?: ListModel<ApiKey, ApiKeyFilter>;

  /** ApiKey 创建编辑参数 */
  apiKeyCreation?: ApiKeyCreation;

  /** 创建业务工作流 */
  createApiKey?: ApiKeyCreateWorkflow;

  /** 删除工作流 */
  deleteApiKey?: ApiKeyWorkflow;

  /** 启用禁用工作流 */
  toggleKeyStatus?: ApiKeyWorkflow;

  /** --------- 仓库管理相关 --------- */

  repo?: ListModel<Repo, RepoFilter>;

  /** 创建仓库表单参数 */
  repoCreation?: RepoCreation;

  /** 创建仓库工作流 */
  createRepo?: RepoCreateWorkflow;

  /** 删除仓库工作流 */
  deleteRepo?: RepoWorkflow;

  /** --------- 镜像相关 --------- */

  image?: ListModel<Image, ImageFilter>;

  /** 创建仓库表单参数 */
  imageCreation?: ImageCreation;

  /** 创建仓库工作流 */
  createImage?: ImageCreateWorkflow;

  /** 删除仓库工作流 */
  deleteImage?: ImageWorkflow;

  /** docker registry */
  dockerRegistryUrl?: FetcherState<string>;
}
