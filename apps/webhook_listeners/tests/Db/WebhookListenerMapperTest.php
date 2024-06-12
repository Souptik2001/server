<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\WebhookListeners\Tests\Db;

use OCA\WebhookListeners\Db\AuthMethod;
use OCA\WebhookListeners\Db\WebhookListenerMapper;
use OCP\Files\Events\Node\NodeWrittenEvent;
use OCP\ICacheFactory;
use OCP\IDBConnection;
use OCP\User\Events\UserCreatedEvent;
use Test\TestCase;

/**
 * @group DB
 */
class WebhookListenerMapperTest extends TestCase {
	private IDBConnection $connection;
	private WebhookListenerMapper $mapper;
	private ICacheFactory $cacheFactory;

	protected function setUp(): void {
		parent::setUp();

		$this->connection = \OCP\Server::get(IDBConnection::class);
		$this->cacheFactory = \OCP\Server::get(ICacheFactory::class);
		$this->pruneTables();

		$this->mapper = new WebhookListenerMapper(
			$this->connection,
			$this->cacheFactory,
		);
	}

	protected function tearDown(): void {
		$this->pruneTables();
		parent::tearDown();
	}

	protected function pruneTables() {
		$query = $this->connection->getQueryBuilder();
		$query->delete(WebhookListenerMapper::TABLE_NAME)->executeStatement();
	}

	public function testInsertListenerWithNotSupportedEvent() {
		$this->expectException(\UnexpectedValueException::class);
		$listener1 = $this->mapper->addWebhookListener(
			null,
			'bob',
			'POST',
			'https://webhook.example.com/endpoint',
			UserCreatedEvent::class,
			null,
			null,
			AuthMethod::None,
			null,
		);
	}

	public function testInsertListenerAndGetIt() {
		$listener1 = $this->mapper->addWebhookListener(
			null,
			'bob',
			'POST',
			'https://webhook.example.com/endpoint',
			NodeWrittenEvent::class,
			null,
			null,
			AuthMethod::None,
			null,
		);

		$listener2 = $this->mapper->getById($listener1->getId());

		$listener1->resetUpdatedFields();
		$this->assertEquals($listener1, $listener2);
	}

	public function testInsertListenerAndGetItWithAuthData() {
		$listener1 = $this->mapper->addWebhookListener(
			null,
			'bob',
			'POST',
			'https://webhook.example.com/endpoint',
			NodeWrittenEvent::class,
			null,
			null,
			AuthMethod::Header,
			['secretHeader' => 'header'],
		);

		$listener2 = $this->mapper->getById($listener1->getId());

		$listener1->resetUpdatedFields();
		$this->assertEquals($listener1, $listener2);
	}
}
