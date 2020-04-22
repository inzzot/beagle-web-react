/*
  * Copyright 2020 ZUP IT SERVICOS EM TECNOLOGIA E INOVACAO SA
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *  http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
*/

import { IdentifiableBeagleUIElement, BeagleView } from '@zup-it/beagle-web'
import { DataContext } from '../types'

type HTTPMethod = 'get' | 'post' | 'put' | 'patch' | 'delete'

export interface XHRAction {
  _actionType_: 'xhr',
  url: string,
  method?: HTTPMethod,
  data?: any,
  onSuccess?: BeagleAction,
  onError?: BeagleAction,
  onFinish?: BeagleAction,
}

export interface SetAttributeAction {
  _actionType_: 'setAttribute',
  componentId: string,
  attributeName: string,
  attributeValue: string,
}

export interface AddChildrenAction {
  _actionType_: 'addChildren',
  componentId: string,
  value: IdentifiableBeagleUIElement[],
  method?: 'append' | 'prepend',
}

export interface SetContextAction {
  _actionType_: 'setContext',
  context?: string,
  path?: string,
  value: string,
}

export interface CustomAction {
  _actionType_: string,
  [key: string]: any,
}

export type BeagleAction = (
  XHRAction
  | SetAttributeAction
  | AddChildrenAction
  | SetContextAction
  | CustomAction
)

export interface ActionHandlerParams<Action extends BeagleAction = any> {
  action: Action,
  eventContextHierarchy: DataContext[],
  element: IdentifiableBeagleUIElement,
  beagleView: BeagleView,
  handleAction: ActionHandler<BeagleAction>,
}

export type ActionHandler<Action extends BeagleAction = any> = (
  (params: ActionHandlerParams<Action>) => void
)
