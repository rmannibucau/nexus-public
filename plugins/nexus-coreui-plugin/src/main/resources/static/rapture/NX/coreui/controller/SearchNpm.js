/*
 * Sonatype Nexus (TM) Open Source Version
 * Copyright (c) 2008-present Sonatype, Inc.
 * All rights reserved. Includes the third-party code listed at http://links.sonatype.com/products/nexus/oss/attributions.
 *
 * This program and the accompanying materials are made available under the terms of the Eclipse Public License Version 1.0,
 * which accompanies this distribution and is available at http://www.eclipse.org/legal/epl-v10.html.
 *
 * Sonatype Nexus (TM) Professional Version is available from Sonatype, Inc. "Sonatype" and "Sonatype Nexus" are trademarks
 * of Sonatype, Inc. Apache Maven is a trademark of the Apache Software Foundation. M2eclipse is a trademark of the
 * Eclipse Foundation. All other trademarks are the property of their respective owners.
 */
/*global Ext, NX*/

/**
 * npm repository search contribution.
 *
 * @since 3.0
 */
Ext.define('NX.coreui.controller.SearchNpm', {
  extend: 'NX.app.Controller',
  requires: [
    'NX.I18n'
  ],

  /**
   * @override
   */
  init: function() {
    var me = this,
        search = me.getController('NX.coreui.controller.Search');

    search.registerCriteria([
      {
        id: 'group',
        group: NX.I18n.get('SearchNpm_Group'),
        config: {
          format: 'npm',
          fieldLabel: NX.I18n.get('SearchNpm_Scope_FieldLabel'),
          width: 250
        }
      }
    ], me);

    search.registerFilter({
      id: 'npm',
      name: 'npm',
      text: NX.I18n.get('SearchNpm_Text'),
      description: NX.I18n.get('SearchNpm_Description'),
      readOnly: true,
      criterias: [
        { id: 'format', value: 'npm', hidden: true },
        { id: 'group' },
        { id: 'name.raw' },
        { id: 'version' }
      ]
    }, me);
  }

});
