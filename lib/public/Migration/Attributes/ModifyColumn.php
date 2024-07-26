<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
namespace OCP\Migration\Attributes;

use Attribute;

/**
 * @since 30.0.0
 */
#[Attribute(Attribute::IS_REPEATABLE | Attribute::TARGET_CLASS)]
class ModifyColumn extends ColumnMigrationAttribute {
	/**
	 * @return string
	 * @since 30.0.0
	 */
	public function definition(): string {
		$type = is_null($this->getType()) ? '' : ' to ' . $this->getType()->value;
		$table = empty($this->getTable()) ? '' : ' from table \'' . $this->getTable() . '\'';
		return empty($this->getName()) ?
			'Modification of a column' . $table . $type
			: 'Modification of column \'' . $this->getName() . '\'' . $table . $type;
	}
}
